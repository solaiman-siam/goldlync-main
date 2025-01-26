export function setCookie(key, value, expireDays = 1) {
  const d = new Date();

  d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);

  document.cookie = `${key}=${value}; expires=${d.toUTCString()}; path=/`;
}

export function getCookie(key) {
  const name = `${key}=`;

  const decodedCookie = decodeURIComponent(document.cookie);

  const ca = decodedCookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return undefined;
}

export function removeCookie(key) {
  document.cookie = `${key}=; path=/`;
}
