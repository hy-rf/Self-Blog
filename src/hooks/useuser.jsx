function useUser() {
  function getjwt() {
    if (new RegExp('Token*').test(document.cookie)) {
      return document.cookie
        .split('; ')
        .find((ele) => new RegExp('Token*').test(ele))
        .split('=')[1];
    }
  }
  return getjwt();
}

export default useUser;
