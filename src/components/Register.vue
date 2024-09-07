<template>
<div class="form-container">
    <div class="form-row">
    <div class="form-group">
        <i class="fas fa-id-card fa-sm" style="padding-right: 5px;"></i>
        <input type="text" v-model="form.name" placeholder="Your name"  @blur="validateField('name')"/>
        <div v-if="v$.name.$error" class="error-message">
          {{ v$.name.$errors[0].$message }}
        </div>
    </div>
    <div class="form-group">
        <i class="fas fa-id-card fa-sm" style="padding-right: 5px;"></i>
        <input type="text" v-model="form.surname" placeholder="Your Surname"  @blur="validateField('surname')"/>
        <div v-if="v$.surname.$error" class="error-message">
          {{ v$.surname.$errors[0].$message }}
        </div>
    </div>
    </div>
    <div class="form-row">
    <div class="form-group">
        <i class="fas fa-user fa-sm" style="padding-right: 5px;"></i>
        <input type="text" v-model="form.username" placeholder="Your Username"  @blur="validateField('username')"/>
        <div v-if="v$.username.$error" class="error-message">
          {{ v$.username.$errors[0].$message }}
        </div>
    </div>
    <div class="form-group">
        <i class="fas fa-envelope fa-sm" style="padding-right: 5px;"></i>
        <input type="email" v-model="form.email" placeholder="E-mail" @blur="validateField('email')"/>
        <div v-if="v$.email.$error" class="error-message">
          {{ v$.email.$errors[0].$message }}
        </div>
    </div>
    </div>
    <div class="form-row">
    <div class="form-group">
        <i class="fas fa-lock fa-sm" style="padding-right: 5px;"></i>
        <input type="password" v-model="form.password" placeholder="Your password" @blur="validateField('password')"/>
        <div v-if="v$.password.$error" class="error-message">
          {{ v$.password.$errors[0].$message }}
        </div>
    </div>
    <div class="form-group">
        <i class="fas fa-lock fa-sm" style="padding-right: 5px;"></i>
        <input 
          :type="showPassword ? 'text' : 'password'" 
          v-model="form.reenterPassword" 
          placeholder="Reenter password" 
          @blur="validateField('reenterPassword')"
        />
        
        <div v-if="v$.reenterPassword.$error" class="error-message">
          {{ v$.reenterPassword.$errors[0].$message }}
        </div>
        <font-awesome-icon 
          :icon="showPassword ? 'eye-slash' : 'eye'" 
          @click="togglePasswordVisibility" 
        />    
    </div>
    </div>
    <button class="next-step-button" @click="validateForm">GO TO NEXT STEP</button>
</div>
<div class="form-container-last" :class="{'hidden': !showNextStep}">
  <div class="form-row">
    <div class="form-group">
      <i class="fas fa-id-card icon"></i>
      <input type="text" placeholder="Identification Number"  v-model="form.idnumber"  @blur="validateField('idnumber')" />
      <div v-if="v$.idnumber.$error" class="error-message">
          {{ v$.idnumber.$errors[0].$message }}
      </div>
    </div>
    <div class="form-group">
      <i class="fas fa-mobile-alt icon"></i>
      <input type="tel" placeholder="05 Telephone"  v-model="form.telephone"  @blur="validateField('telephone')" />
      <div v-if="v$.telephone.$error" class="error-message">
          {{ v$.telephone.$errors[0].$message }}
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group">
      <i class="fas fa-shield-alt icon"></i>
      <input type="text" placeholder="Security Question"  v-model="form.secu_quest"  @blur="validateField('secu_quest')" />
      <div v-if="v$.secu_quest.$error" class="error-message">
          {{ v$.secu_quest.$errors[0].$message }}
        </div>
    </div>
    <div class="form-group">
      <i class="fas fa-shield-alt icon"></i>
      <input type="text" placeholder="Security answer"  v-model="form.secu_ans"  @blur="validateField('secu_ans')" />
      <div v-if="v$.secu_ans.$error" class="error-message">
          {{ v$.secu_ans.$errors[0].$message }}
      </div>
    </div>
  </div>

  <div class="setup-menu">
    <span class="menu-title">LOGIN SETUP MENU</span>
    <div class="menu-options">
      <label>
        <span>Activate login via email</span>
        <input type="radio" name="loginOption" value="email" v-model="form.login_opt" />
      </label>
      <label>
        <span>Activate login via SMS</span>
        <input type="radio" name="loginOption" value="sms" v-model="form.login_opt" />
      </label>
      <label>
        <span>Disable all</span>
        <input type="radio" name="loginOption" value="disable" v-model="form.login_opt" />
      </label>
    </div>
  </div>

  <div class="terms">
    <input type="checkbox" id="terms-checkbox"   v-model="form.terms"  @blur="validateField('terms')" >
    <label for="terms-checkbox"></label>
    <span>I HAVE READ AND ACCEPT THE GENERAL TERMS AND CONDITIONS</span>
  </div>

  <button class="register-button" @click="submitForm">
    <i class="fas fa-user-plus"></i> REGISTER NOW
  </button>


</div>
</template>
  
<script lang="ts" setup name="Register">
import { ref, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength, email, sameAs } from '@vuelidate/validators';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

library.add(faEye, faEyeSlash);

let showPassword = ref(false)
let showNextStep = ref(false);

interface Form {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  reenterPassword: string;
  idnumber: string;
  telephone: string;
  secu_quest: string;
  secu_ans: string;
  terms: boolean;
  login_opt: 'email' | 'sms' | 'disable';
}

const form = reactive<Form>({
  name: '',
  surname: '',
  username: '',
  email: '',
  password: '',
  reenterPassword: '',
  idnumber: '',
  telephone: '',
  secu_quest: '',
  secu_ans: '',
  terms: false,
  login_opt: 'email'
});

const rules = {
  name: { required },
  surname: { required },
  username: { required, minLength: minLength(3) },
  email: { required, email },
  password: { required, minLength: minLength(8) },
  reenterPassword: { required, sameAs: (value: string) => value === form.password },
  idnumber: { required },
  telephone: { required },
  secu_quest: { required },
  secu_ans: { required },
  terms: { required, sameAs: (value: boolean) => value === true },
  login_opt: { required }
};

const v$ = useVuelidate(rules, form);

function validateField(field: keyof Form) {
  v$.value[field].$touch();
}

async function submitForm() {
  const isFormValid = await v$.value.$validate();
  if (!isFormValid) return;

  // Form is valid, proceed with submission
  console.log(form);
}

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value
}

const validateForm = () => {
  const { name, surname, username, email, password, reenterPassword } = form;
  if (
    name.trim() !== '' &&
    surname.trim() !== '' &&
    username.trim() !== '' &&
    email.trim() !== '' &&
    password.trim() !== '' &&
    reenterPassword.trim() !== '' &&
    password === reenterPassword
  ) {
    showNextStep.value = true;
  } else {
    alert('Please fill in all required fields and ensure password matches');
  }
};

</script>
  
<style scoped>
.form-container {
  background-color: transparent;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-container-last {
  background-color: transparent;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-row {
  background-color: transparent;
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.form-group {
  display: flex;
  align-items: center;
  background-color: rgba(116, 116, 116, 0.1);
  border-radius: 20px;
  padding: 10px;
  flex: 1;
}

.icon {
  color: #001e3c;
  margin-right: 10px;
}

input {
  border: none;
  background-color: transparent;
  outline: none;
  width: 100%;
  font-size: 14px;
  color: #333;
}

.next-step-button {
  background-color: #4CAF50;
  color: #ffffff;
  font-size: 16px;
  padding: 12px;
  border-radius: 20px;
  width: 100%;
  border: none;
  cursor: pointer;
}
  
.next-step-button:hover {
  background-color: #45a049;
}
.error-message {
  color: #ff0000; /* Red color for error messages */
  font-size: 12px; /* Smaller font size for error messages */
  margin-top: 2px; /* Add some space between the input field and the error message */
  padding-left: 2px; /* Add some padding to the left of the error message */
  font-weight: bold; /* Make the error message bold */
  z-index: -1;
}

/* You can also add some animation to the error message to make it more noticeable */
.error-message {
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-size: 16px 16px;
}

.icon-eye {
  background-image: url('eye-icon.png'); /* replace with your own icon image */
}

.register-button {
  background-color: #4CAF50;
  color: #ffffff;
  font-size: 16px;
  padding: 12px;
  border-radius: 20px;
  width: 100%;
  border: none;
  cursor: pointer;
}
  
.register-button:hover {
  background-color: #45a049;
}


.terms {
  display: flex;
  align-items: center;
}

.terms input[type="checkbox"] {
  display: none;
}

.terms label {
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
}

.terms input[type="checkbox"]:checked + label {
  background-color: #007bff;
  border-color: #007bff;
}

.terms input[type="checkbox"]:checked + label::after {
  content: "\2713";
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 20px;
}

.setup-menu {
  text-align: center;
}

.setup-menu .menu-title {
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 20px;
}

.setup-menu .menu-options {
  display: flex;
  justify-content: space-between;
}

.setup-menu .menu-options label {
  display: inline-block;
  margin-right: 20px;
}
.setup-menu .menu-options label span {
  display: inline-block;
  vertical-align: middle;
}

.setup-menu .menu-options input[type="radio"] {
  vertical-align: middle;
}

.setup-menu .menu-options label {
  display: inline-block;
  margin-right: 20px;
}

.setup-menu .menu-options input[type="radio"]:checked + span {
  color: #007bff;
}

.hidden {
  display: none;
}
</style>
  
