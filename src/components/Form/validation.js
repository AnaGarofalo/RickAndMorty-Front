export function validar(userData) {
  let errors = {};

  if (userData.username === "")
    errors = { ...errors, username: "Must enter username" };
  else if (userData.username.length > 35)
    errors = {
      ...errors,
      username: "Username can't have more than 35 characters",
    };
  else if (
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{3,3}))$/.test(
      userData.username
    )
  )
    errors = { ...errors, username: "" };
  else
    errors = {
      ...errors,
      username: "Username must be an email",
    };

  if (userData.password.length < 6)
    errors = {
      ...errors,
      password: "Password must have at least 6 characters",
    };
  else if (userData.password.length > 10)
    errors = {
      ...errors,
      password: "Password can't have more than 10 characters",
    };
  else if (userData.password.match(/\d/)) errors = { ...errors, password: "" };
  else
    errors = {
      ...errors,
      password: "Password must have at least 1 number",
    };

  return errors;
}
