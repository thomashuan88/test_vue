<template>
<div class="bg-blue-900 flex justify-center items-center h-screen">

<div class="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
  <!-- Form Heading -->
  <h2 class="text-center text-2xl font-semibold text-gray-800 mb-6">Login Setup Menu</h2>

  <!-- Form Inputs -->
  <form action="#" method="POST">
    <div class="space-y-4">

      <!-- Identification Number -->
      <div class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0018 15H5a2 2 0 01-2-2v-1a2 2 0 012-2h13.405l1.405-1.405A2.032 2.032 0 0020 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h12z"/>
        </svg>
        <input type="text" placeholder="Identification Number" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" required>
      </div>

      <!-- Telephone -->
      <div class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 011.85-1.995L5 3h14a2 2 0 012 2v14a2 2 0 01-1.995 1.85L19 21H5a2 2 0 01-2-2V5z"/>
        </svg>
        <input type="text" placeholder="Telephone" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" required>
      </div>

      <!-- Security Question -->
      <div class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 2a1 1 0 00-.894.553l-4 8A1 1 0 001 11h3.34L3.59 15H2a1 1 0 100 2h2.352a1 1 0 00.894-.553l1.618-3.236a1 1 0 00.894.553H21a1 1 0 100-2H9.235l2-4H20a1 1 0 100-2H8.765l-2-4H20a1 1 0 100-2H6z"/>
        </svg>
        <input type="text" placeholder="Security Question" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" required>
      </div>

      <!-- Security Answer -->
      <div class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0018 15H5a2 2 0 01-2-2v-1a2 2 0 012-2h13.405l1.405-1.405A2.032 2.032 0 0020 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h12z"/>
        </svg>
        <input type="text" placeholder="Security Answer" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" required>
      </div>

    </div>

    <!-- Login Setup Menu -->
    <h3 class="mt-6 text-center text-lg font-medium text-gray-600">Login Setup Menu</h3>
    <div class="flex justify-between items-center mt-4 bg-gray-100 p-4 rounded-lg">
      <label class="flex items-center">
        <input type="radio" name="login-method" value="email" class="form-radio h-4 w-4 text-blue-600" checked>
        <span class="ml-2 text-gray-700">Activate login via email</span>
      </label>
      <label class="flex items-center">
        <input type="radio" name="login-method" value="sms" class="form-radio h-4 w-4 text-blue-600">
        <span class="ml-2 text-gray-700">Activate login via SMS</span>
      </label>
      <label class="flex items-center">
        <input type="radio" name="login-method" value="disable" class="form-radio h-4 w-4 text-blue-600">
        <span class="ml-2 text-gray-700">Disable all</span>
      </label>
    </div>

    <!-- Terms and Conditions -->
    <div class="flex items-center mt-6">
      <input type="checkbox" name="terms" id="terms" class="form-checkbox h-4 w-4 text-blue-600">
      <label for="terms" class="ml-2 text-sm text-gray-700">I have read and accept the general terms and conditions</label>
    </div>

    <!-- Submit Button -->
    <div class="mt-6">
      <button type="submit" class="w-full py-3 bg-green-500 text-white rounded-lg font-semibold text-lg hover:bg-green-600 transition duration-300">
        Register Now
      </button>
    </div>
  </form>
</div>

</div>
</template>

<script lang="ts" setup name="Temp">
</script>

<style scoped>

</style>