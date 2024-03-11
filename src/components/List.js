// Remove these lines if not used
import { useEffect, useState } from "react";
import { fetchData } from "../api/Api";
import { Link, useNavigate } from "react-router-dom";


const List = ({ title, param }) => {
    // const navigate = useNavigate();
    // Remove this line if 'param' is not used
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchData(param).then(res => setList(res.data.results))
    }, []);

    // console.log(list.data.name)
    const posterhandle = (dat) => {
        
     }
    // console.log(list[0].name);

    return (
        <>
            <div className="list_container">
                <div className="list_list">
                    <h3>{title}</h3>
                    <Link to="/">
                        {list && list.map(item => (
                            <img onClick={posterhandle}
                                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                                alt={item.title}
                            />
                        ))}
                    </Link>
                </div>
            </div>
        </>
    )

}

export default List;
