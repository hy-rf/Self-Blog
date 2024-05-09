function Post() {
  let test = [];
  var i = 1;
  while (i <= 100) {
    test[i] = i;
    i++;
  }
  return (
    <>
      {test.map((i) => {
        return <p key={i}>{i}</p>;
      })}
      <p>post</p>
    </>
  );
}
export default Post;
