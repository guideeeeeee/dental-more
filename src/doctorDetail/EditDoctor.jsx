import "./EditDoctor.css";
function EditDoctor() {
  return (
    <>
      <div className="wpage">
        
        <div className="topForm">
          {/* topform */}
          <div className="leftForm">

            {/* fullname */}
            <div className="fullname">
              <div className="firstname">
                <text className="fullname-text">Firstname:</text>
                <input type="text"></input>
              </div>
              <div className="lastname">
                <text className="fullname-text">Lastname:</text>
                <input type="text"></input>
              </div>
            </div>

            {/* specialized */}
            <div className="expertise">
                <text className="normalText">Specialized expertise:</text>
                <input type="text"></input>
            </div>
          </div>
          <div className="RightForm"></div>
        </div>
        <div className="bottomForm">{/* bottomform */}</div>
      </div>
    </>
  );
}
export default EditDoctor;
