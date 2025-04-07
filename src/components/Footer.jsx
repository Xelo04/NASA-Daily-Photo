export default function Footer(props) {
  const { handleToggleModal } = props;
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>NASA Daily Photo</h1>
        <h2>The Brutal Marsian Landscape</h2>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
