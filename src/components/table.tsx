import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { User } from "../state/interface/user";
import "../styles/table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faCheck,
  faMoneyCheck,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
function Table(prop: any) {
  const dispatch = useDispatch();
  const { deleteUser, updateUser } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const [editing, setediting] = React.useState(false);
  const [idRow, setIdRow] = React.useState("");
  const [nameRow, setName] = React.useState("");
  const [age, setAge] = React.useState(0);
  const [email, setEmail] = React.useState("");

  // const [rowData, setRowData] = React.useState(prop);

  function deleteUserHandler(
    id: string,
    name: string,
    email: string,
    age: number
  ) {
    const user = {
      id: id,
      name: name,
      email: email,
      age: age,
    };
    deleteUser(user);
  }
  function updaeUser(user: User) {
    setIdRow(user.id);
    setName(user.name);
    setEmail(user.email);
    setAge(user.age);
    setediting(!editing);
  }
  function saveUser(id: string) {
    const user = {
      id: id,
      name: nameRow,
      email: email,
      age: age,
    };
    updateUser(user);
    setIdRow("");
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {prop.prop.map((user: User) => (
            <tr key={user.name}>
              {/* <td>
          <input type="text" name="name" defaultValue={user.name}  onChange={e => setName(e.target.value)}  disabled={update}/></td> */}
              <td>
                {user.id === idRow ? (
                  <input
                    type="text"
                    name="name"
                    value={nameRow}
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {user.id === idRow ? (
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {user.id === idRow ? (
                  <input
                    type="number"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                  />
                ) : (
                  user.age
                )}
              </td>

              <td>
                <div
                  onClick={(e) =>
                    deleteUserHandler(user.id, user.name, user.email, user.age)
                  }
                  className="position-icon"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </div>
                {user.id !== idRow ? (
                  <div
                    onClick={() => updaeUser(user)}
                    className="position-icon"
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </div>
                ) : (
                  <div
                    onClick={(e) => saveUser(user.id)}
                    className="position-icon"
                  >
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
