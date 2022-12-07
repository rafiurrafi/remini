const Form = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
  }
  return (
    <div>
      <h1>Quiz setup</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
