export default function Footer(props) {
  const { handleToggleModal, data } = props;
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>{data?.title}</h2>
        <h1>NASA Daily Photo</h1>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
