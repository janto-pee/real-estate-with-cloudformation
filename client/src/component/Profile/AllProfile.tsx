import ProfileSummary from "./ProfileSummary";
import ProfileEdit from "./ProfileEdit";
import Advertise from "./Advertise";
import Wishlist from "./Wishlist";
import { ListItems } from "..";
import { useState } from "react";

interface AllProfileInterface {
  activeComponent: string;
  setActiveComponent: any;
}
export default function AllProfile({
  activeComponent,
  setActiveComponent,
}: AllProfileInterface) {
  const [edit, setEdit] = useState(false);
  const [deleteHouse, setDeleteHouse] = useState(false);
  return (
    <div className="p-3">
      {activeComponent == "profilesummary" ? (
        <ProfileSummary setActiveComponent={setActiveComponent}  edit={edit}
        setEdit={setEdit}
        deleteHouse={deleteHouse}
        setDeleteHouse={setDeleteHouse}/>
      ) : activeComponent == "advertise" ? (
        <Advertise setActiveComponent={setActiveComponent} />
      ) : activeComponent == "gridads" ? (
        <ListItems
          classnames="bg-gray-300"
          edit={edit}
          setEdit={setEdit}
          deleteHouse={deleteHouse}
          setDeleteHouse={setDeleteHouse}
        />
      ) : activeComponent == "profileedit" ? (
        <ProfileEdit />
      ) : activeComponent == "wishlist" ? (
        <Wishlist />
      ) : (
        <ProfileSummary />
      )}
    </div>
  );
}
