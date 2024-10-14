import dataJson from "../../public/data/data.json"; // Mengimpor data JSON
import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

// Interface untuk data pengguna
interface IUser {
  id: number;
  name: string;
  hobbies?: { id: number; name: string }[];
  age: number;
  address: string;
  city: string;
  phone: string;
}

const UserList = () => {
  const users: IUser[] = dataJson;

  // Mengambil semua data pengguna
  const getSemuanya = () => users;

  // Mengambil data berdasarkan nama tertentu
  const getDataDenganNama = (name: string) => {
    return users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
  };

  // Mengambil data berdasarkan kota
  const getDataAlamat = (city: string) => {
    return users.filter(user => user.city.toLowerCase() === city.toLowerCase());
  };

  // Mengambil data berdasarkan umur minimal
  const getDataUmur = (minAge: number) => {
    return users.filter(user => user.age >= minAge);
  };

  // Filterisasi Data
  const semuaUser = getSemuanya();
  const namaJohn = getDataDenganNama("John");
  const alamatNewYork = getDataAlamat("New York");
  const umurTigaPuluh = getDataUmur(30);

  // Fungsi untuk menampilkan daftar pengguna
  const renderUsers = (userList: IUser[], title: string) => (
    <>
      <center><h3>{title}</h3></center>
      {userList.map(user => (
        <CardList key={user.id}>
          <p>Nama: {user.name}</p>
          {user.hobbies && user.hobbies.length > 0 && (
            <p>Hobi: {user.hobbies.map(hobby => hobby.name).join(", ")}</p>
          )}
          <p>Umur: {user.age}</p>
          <p>Alamat: {user.address}</p>
          <p>Kota: {user.city}</p>
          <p>Nomor HP: {user.phone}</p>
          <ViewUserButton userId={user.id} />
        </CardList>
      ))}
    </>
  );

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">HALAMAN PENGGUNA</h1>
      {renderUsers(semuaUser, "TAMPIL SEMUA DATA")}
      {renderUsers(namaJohn, 'TAMPIL DATA DENGAN NAMA TERTENTU ("John")')}
      {renderUsers(alamatNewYork, "TAMPIL DATA DENGAN ALAMAT NEW YORK")}
      {renderUsers(umurTigaPuluh, "TAMPIL DATA DENGAN UMUR LEBIH DARI 30 TAHUN")}
    </>
  );
};

export default UserList;
