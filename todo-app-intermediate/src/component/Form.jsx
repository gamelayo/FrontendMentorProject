const Form = ({ handleSubmit, inputTodo, setInputTodo }) => {
  return (
    <div className="w-[100%] mt-[35px] relative form">
      <div className="circle"></div>

      <form onSubmit={handleSubmit} className="">
        <input
          type="text"
          className="w-[100%] h-14 bg-card text-primary shadow-primary border-none outline-0 rounded pl-5 text-lg z-40"
          placeholder="Create a new todo..."
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
        />
      </form>
    </div>
  );
};
export default Form;
