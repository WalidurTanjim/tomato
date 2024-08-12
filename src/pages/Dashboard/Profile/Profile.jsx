import useAuth from "../../../hooks/useAuth";

const Profile = () => {
    const { user } = useAuth();
    // console.log(user);

    return (
        <section className="profile py-5">
            <section className="grid gap-5 grid-cols-1 md:grid-cols-2">
                <div className="thumbnail flex justify-center mb-5 md:mb-0">
                    <div>
                        <img src={user?.photoURL} alt="User Image" className="min-w-full rounded-full border-4 border-zinc-600" />
                        <h1 className="text-2xl md:text-3xl font-medium mt-3 text-center">{user?.displayName}</h1>
                        <h1 className="text-center">{user?.email}</h1>
                    </div>
                </div>

                <div className="settings">

                </div>
            </section>
        </section>
    );
};

export default Profile;