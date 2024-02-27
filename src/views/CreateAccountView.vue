<script setup>
import * as yup from "yup";
import { useForm } from "vee-validate";
import { useProductStore } from "../stores/productStore";
import { ref } from "vue";
import router from "@/router";
const productStore = useProductStore();

const accountCreated = ref(false);

const schema = yup.object({
  email: yup.string().required().email().label("Email address"),
  fullName: yup.string().required().label("Full name"),
  password: yup.string().required().min(6).label("Password"),
  passwordConfirm: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords must match")
    .label("Password confirmation"),
  terms: yup
    .boolean()
    .required()
    .isTrue("You must agree to terms and conditions")
    .label("terms agreement"),
});

const { defineField, handleSubmit, resetForm, errors, values } = useForm({
  validationSchema: schema,
  initialValues: {
    terms: false,
  },
});

const bootstrapConfig = (state) => ({
  props: {
    validFeedback: "Looks alright!",
    invalidFeedback: state.errors[0],
    state: state.errors[0] ? false : state.touched ? true : undefined,
  },
});

const [fullName, fullNameProps] = defineField("fullName", bootstrapConfig);
const [email, emailProps] = defineField("email", bootstrapConfig);
const [password, passwordProps] = defineField("password", bootstrapConfig);
const [passwordConfirm, passwordConfirmProps] = defineField(
  "passwordConfirm",
  bootstrapConfig
);
const [terms, termsProps] = defineField("terms", bootstrapConfig);

const goToLogin = () =>
  setTimeout(() => {
    router.push("/");
  }, 5000);

const onSubmit = handleSubmit((values) => {
  productStore.createNewAccount(values);
  resetForm();
  accountCreated.value = accountCreated.value ? false : true;
  goToLogin();
  // save to session storage
});
</script>

<template>
  <BCol class="m-5 p-4 bg-light" v-if="accountCreated === false">
    <h2 class="text-uppercase text-primary m-4">Sign up</h2>
    <h3 class="text-uppercase text-primary m-4 text-wrap">
      Become a ecoframe friend
    </h3>
    <BForm @submit="onSubmit()" @reset="resetForm()">
      <BFormGroup
        id="input-group-1"
        label="Full name:"
        label-for="input-1"
        v-bind="fullNameProps"
        class="mb-3"
      >
        <BFormInput
          id="input-1"
          v-model="fullName"
          placeholder="Enter name"
        ></BFormInput>
      </BFormGroup>

      <BFormGroup
        id="input-group-2"
        label="Email address:"
        label-for="input-2"
        v-bind="emailProps"
        description="We'll never share your email with anyone else."
        class="mb-3"
      >
        <BFormInput
          id="input-2"
          v-model="email"
          type="email"
          placeholder="Enter email"
        ></BFormInput>
      </BFormGroup>

      <BFormGroup
        id="input-group-3"
        label="Password:"
        label-for="input-3"
        v-bind="passwordProps"
        class="mb-3"
      >
        <BFormInput
          id="input-3"
          v-model="password"
          type="password"
          placeholder="Enter password"
        ></BFormInput>
      </BFormGroup>

      <BFormGroup
        id="input-group-4"
        label="Password confirmation:"
        v-bind="passwordConfirmProps"
        label-for="input-4"
        class="mb-3"
      >
        <BFormInput
          id="input-4"
          v-model="passwordConfirm"
          type="password"
          placeholder="Enter password confirmation"
        ></BFormInput>
      </BFormGroup>

      <BFormGroup id="input-group-4" v-bind="termsProps" class="mb-3">
        <BFormCheckbox v-model="terms" :value="true"
          >I agree to terms and conditions</BFormCheckbox
        >
      </BFormGroup>

      <BButton class="mt-2 me-4" type="submit" variant="primary"
        >Submit</BButton
      >
      <BButton class="mt-2" type="reset" variant="danger">Reset</BButton>
    </BForm>
    <p class="text-center mt-4">
      Allready member?
      <router-link class="text-info" to="/">login here</router-link>
    </p>
  </BCol>
  <BCol v-if="accountCreated" class="m-5 p-4 bg-light">
    <h2 class="text-uppercase text-primary m-4">Account created</h2>
    <p class="text-center mt-4">
      You can now login and start using ecoframe. You will be redirected to the
      login page in 5 seconds.
    </p>
  </BCol>
</template>

<style scoped></style>
