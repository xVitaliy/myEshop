import React, { memo } from "react";
import { Box, FormControl, TextField } from "@mui/material";
import { Field } from "formik";

const CreateField = memo(({
  errors, touched, type = "text", name, styleField, placeholder = name,
}) => {
  return (
    <Box className={styleField.input}>
      <FormControl sx={{ mt: 2, position: "relative" }}>
        <Field
          as={TextField}
          name={name}
          type={type}
          error={errors[name] && touched[name] && true}
          helperText={errors[name] && touched[name]
                        && (
                        <Box
                          component="span"
                          sx={{
                            fontSize: "12px",
                            position: "absolute",
                            left: 0,
                            top: "30px"
                          }}
                        >{ errors[name] }
                        </Box>
                        )}
          label={errors[name] && touched[name] && "error"}
          placeholder={placeholder}
        />
      </FormControl>
    </Box>
  );
});

export default CreateField;
