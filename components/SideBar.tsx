import NewChat from "./NewChat"

function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen ">
        <div className="flex-1">
            {/*New chat */}
            <NewChat/>
            <div>
                {/*ModulSelection */}
            </div>
            {/*Map trough the chatrows */}
        </div>
    </div>
  )
}

export default SideBar