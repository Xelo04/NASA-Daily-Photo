export default function SideBar(props) {
  const { handleToggleModal } = props;

  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContent">
        <h2>The Brutal Martian Landscape</h2>
        <div>
          <p>Description</p>
          <p>
            Description dadada
            asssssssssssssssssssssssssssssssssssssssssssssssssssssss
          </p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
