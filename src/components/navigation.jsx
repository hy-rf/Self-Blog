function Navigation() {
  return (
    <>
      <p
        onClick={() => {
          document.getElementById('root').classList.add('move-nav');
        }}
      >
        avatar
      </p>
    </>
  );
}
export default Navigation;
