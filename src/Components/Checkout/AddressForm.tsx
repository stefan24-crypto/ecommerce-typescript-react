import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Grid,
  SelectChangeEvent,
} from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router";
import FormInput from "./CustomTextField";
import { commerce } from "../../lib/commerce";
import classes from "./AddressForm.module.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { UIActions } from "../../store/ui-slice";

interface AddressFormProps {
  checkoutToken: any;
  next: (data: { [key: string]: any }) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState({});
  const [shippingCountry, setShippingCountry] = useState<string>("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState({});
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState<any[]>([]);
  const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.ui.isLoading);

  const countries = Object.entries(shippingCountries).map(
    ([code, countryName]) => ({
      id: code,
      label: countryName,
    })
  );

  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, countryName]) => ({
      id: code,
      label: countryName,
    })
  );
  const options = shippingOptions.map((so) => ({
    id: so.id,
    label: `${so.description} - (${so.price.formatted_with_symbol})`,
  }));

  const fetchShippingCountries = async (checkoutTokenID: string) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenID
    );
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode: any) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (
    checkoutTokenID: any,
    country: any,
    region: any = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenID,
      { country, region }
    );
    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);

  const changeShippingCountryHandler = (e: SelectChangeEvent<string>) => {
    setShippingCountry(e.target.value);
  };
  const changeShippingSubdivisionHandler = (e: SelectChangeEvent<string>) => {
    setShippingSubdivision(e.target.value);
  };

  const changeShippingOptionHandler = (e: SelectChangeEvent<string>) => {
    setShippingOption(e.target.value);
  };

  return (
    <>
      <div className={classes.title}>
        <h1>Shipping Address</h1>
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
            })
          )}
        >
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First Name" />
            <FormInput required name="lastName" label="Last Name" />
            <FormInput required name="address1" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zipCode" label="ZIP / PostalCode" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                fullWidth
                onChange={changeShippingCountryHandler}
                value={shippingCountry}
              >
                {countries.map((each: { [key: string]: any }) => (
                  <MenuItem key={each.id} value={each.id}>
                    {each.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select
                fullWidth
                onChange={changeShippingSubdivisionHandler}
                value={shippingSubdivision}
              >
                {subdivisions.map((each: { [key: string]: any }) => (
                  <MenuItem key={each.id} value={each.id}>
                    {each.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select
                fullWidth
                onChange={changeShippingOptionHandler}
                value={shippingOption}
              >
                {options.map((each: any) => (
                  <MenuItem key={each.id} value={each.id}>
                    {each.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <div className={classes.btns}>
            <button
              className={classes.btn}
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </button>
            <button className={classes.btn} type="submit">
              Next
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
