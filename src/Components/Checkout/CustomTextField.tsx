import React from "react";
import { TextField, Grid } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

interface FormInputProps {
  name: string;
  label: string;
}

const FormInput: React.FC<FormInputProps> = ({ name, label }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            variant="outlined"
            fullWidth
            required
          />
        )}
        name={name}
        defaultValue=""
      />
    </Grid>
  );
};

export default FormInput;
