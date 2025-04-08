export default function SideBar(props) {
  const { handleToggleModal, data, showModal, isAnimating } = props;

  return (
    <div
      className={`sidebar ${showModal ? "show" : ""} ${
        isAnimating ? "hide" : ""
      }`}
    >
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContent">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
