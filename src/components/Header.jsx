import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';

export default function Header(){
    return (<header >
        <PlaylistAddCheckCircleIcon className ="toDoIcon" onClick = {()=> {
            console.log("clicked")
        }} />
        <h1>
        
        To Do List App
        </h1>
        
        </header>)
}