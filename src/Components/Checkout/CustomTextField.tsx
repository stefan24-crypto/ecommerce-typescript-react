import React from "react";
import { TextField, Grid } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

interface FormInputProps {
  name: string;
  label: string;
  required: any;
}

const FormInput: React.FC<FormInputProps> = ({ name, label, required }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        render={({ field }) => (
          <TextField {...field} label={label} variant="outlined" fullWidth />
        )}
        name={name}
        rules={{ required: required }}
      />
    </Grid>
  );
};

export default FormInput;
