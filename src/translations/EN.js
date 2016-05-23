export default {
  UTILS: {
    LOADING: 'Loading...',
    NAME: 'Name',
    CANCEL: 'Cancel',
    CREATE: 'Create',
    UPLOAD: 'Upload',
    OPEN: 'Open',
    DOWNLOAD: 'Download',
    DELETE: 'Delete',
    REFRESH: 'Refresh',
  },
  SETTINGS: {
    ACCOUNT: 'My Account',
    BILLING: 'Billing & Cost Management',
    SECURITY: 'Security Credentials',
    SIGN_OUT: 'Sign Out',
    SIGN_OUT_CONFIRM_TITLE: 'Would you like to sign out without your upload?',
    SIGN_OUT_CONFIRM_MESSAGE: `You have in progress opreations
      or uploads and leaving now will cancel them.Still leaving?`,
    LEAVE: 'Leave',
    STAY: 'Stay',
  },
  BUCKET: {
    EMPTY_MESSAGE: 'Looks like you don\'t have any Bucket',
    CREATE_MESSAGE: 'Don\'t worry. It\'s easy to create one.',
    ERROR_MESSAGE: 'Oops, your connection seems off...',
    REFRESH_MESSAGE: 'Don\'t worry. You can refresh to try again.',
    DUPLICATE_MESSAGE: 'That bucket already exists! Please select a different name and try again.',
    CREATE: 'Create Bucket',
    DELETE: 'Delete Bucket',
    NAME: 'Bucket Name',
    CREATE_DESCRIPTION: `The name that you choose must be unique across
    existing bucket names in S3 Portal.`,
  },
  FILE: {
    CREATE_FOLDER: 'Create Folder',
  },
  ACTION_NAVBAR: {
    ACTIONS: 'Actions',
    PROPERTIES: 'Properties',
    TRANSFERS: 'Transfers',
    NONE: 'None',
  },
  TOAST: {
    SIGN_IN_SUCCESS: 'Sign In Success!',
    SIGN_UP_SUCCESS: 'Sign Up Success!',
    SIGN_OUT_SUCCESS: 'Sign Out Success!',
    SIGN_OUT_FAILURE: 'Sign Out Failure!',
    CREATE_BUCKET_SUCCESS: 'Bucket {{ bucket }} are create success!',
    CREATE_BUCKET_FAILURE: 'Bucket {{ bucket }} are create failure, please try again!',
  },
  AUTH: {
    EMAIL: 'Email',
    PASSWORD: 'Password',
    RETYPE_PASSWORD: 'Retype Password',
    SIGN_IN: 'Sign In',
    SIGN_UP: 'Sign Up',
    HAVE_ACCOUNT: 'Already have an account?',
    HAVE_NOT_ACCOUNT: 'Don\'t have an account?',
    CREATE_ACCOUNT: 'Create an account',
    LOGIN_TO_YOUR_ACCOUNT: 'Log in to your account',
    ALREADY_EXIST: 'Someone already has that username. Try another?',
    SIGN_IN_INCORRECT: 'Your email or password was incorrect. Please try again.',
  },
};
