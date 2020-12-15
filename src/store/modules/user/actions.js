export function updateProfileRequest( name, email, oldPassword, password, confirmPassword) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { name, email, oldPassword, password, confirmPassword },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}