"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Button, TextField, Grid, Container, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
});

const page = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center  ">
        <LampContainer className="mt-10">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl tracking-tight text-transparent md:text-7xl font-bold "
          >
            Contact Us <br /> For More Details
          </motion.h1>
        </LampContainer>
        <BackgroundGradient className="rounded-[22px] w-full min-h-[420px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Container maxWidth="md">
            <Formik
              initialValues={{ name: "", description: "" }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        name="name"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{ style: { color: "white" } }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "white",
                            },
                            "&:hover fieldset": {
                              borderColor: "white",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "white",
                            },
                          },
                          "& .MuiInputBase-input": {
                            color: "white",
                          },
                          "& .MuiFormHelperText-root": {
                            color: "white",
                          },
                        }}
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        name="description"
                        label="Description"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        InputLabelProps={{ style: { color: "white" } }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "white",
                            },
                            "&:hover fieldset": {
                              borderColor: "white",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "white",
                            },
                          },
                          "& .MuiInputBase-input": {
                            color: "white",
                          },
                          "& .MuiFormHelperText-root": {
                            color: "white",
                          },
                        }}
                        error={
                          touched.description && Boolean(errors.description)
                        }
                        helperText={touched.description && errors.description}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                          background:
                            "linear-gradient(to right, #ff7e5f, #feb47b)",
                          color: "white",
                        }}
                      >
                        Register
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Container>
        </BackgroundGradient>
      </div>
    </>
  );
};

export default page;
