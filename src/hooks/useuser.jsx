function useUser() {
  function getjwt() {
    if (new RegExp('Token*').test(document.cookie)) {
      return true;
    }
    return false;
  }
  return getjwt();
}

export default useUser;
