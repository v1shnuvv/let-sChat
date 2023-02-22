import "./Cssdemo.css"
export default function cssdemo(){
    const font = "100px"
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: font,
        fontFamily: "Arial",
        borderRadius: "10px"
      };
    return(
        <>
            <div className="demo_container">
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <input type="file" id="insertfile" style={{display: "none"}}/>
                <label htmlFor="insertfile" style={mystyle}>Add image</label>
            </div>
        </>
    )
}