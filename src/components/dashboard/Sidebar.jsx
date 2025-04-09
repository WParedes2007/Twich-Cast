
export const Sidebar = () => {
    if(!channels){
        return null
    }

    return(
        <div className="sidebar-container">
            <span className="sidebar-title">Sugeridos</span>
            <span className="sidebar-subtitle">Canales Que Sigo</span>
            {channels.map((channel) => {
                return(
                    <div key={channel.id} className="sidebar-list-i">
                        <span className="sidebar-list-username">{channel.username}</span>
                        <span className="sidebar-list-status" 
                            style={{
                            color: channel.isOnline ? "green" : "red"
                            }}
                        >
                            {channel.isOnline ? "Online" : "Offline"}
                        </span>
                    </div>
                )
            })}
        </div>
           
    )
}