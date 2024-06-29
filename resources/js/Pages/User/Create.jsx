import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
  const { data, setData, post, errors, reset } = useForm({
    image: "",
    name: "",
    status: "",
    description: "",
    due_date: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route("user.store"));
  };
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
            Create New Users
          </h2>
        </div>
      }
    >
      <Head title="Users" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <form
                onSubmit={onSubmit}
                className="p-4 bg-white shadow sm:rounded-lg sm:p-8 dark:bg-gray-800"
              >
                <div>
                  <InputLabel htmlFor="user_image_path" value="User Image" />
                  <TextInput
                    id="user_image_path"
                    type="file"
                    name="image"
                    className="block w-full mt-1"
                    onChange={(e) => setData("image", e.target.files[0])}
                  />
                  <InputError message={errors.image} className="mt-2" />
                </div>
                <div className="mt-4">
                  <InputLabel htmlFor="user_name" value="User Name" />
                  <TextInput
                    id="user_name"
                    type="text"
                    name="name"
                    value={data.name}
                    className="block w-full mt-1"
                    isFocused={true}
                    onChange={(e) => setData("name", e.target.value)}
                  />
                  <InputError message={errors.name} className="mt-2" />
                </div>
                <div className="mt-4">
                  <InputLabel
                    htmlFor="user_description"
                    value="User Description"
                  />
                  <TextAreaInput
                    id="user_description"
                    name="description"
                    value={data.description}
                    className="block w-full mt-1"
                    onChange={(e) => setData("description", e.target.value)}
                  />
                  <InputError message={errors.description} className="mt-2" />
                </div>
                <div className="mt-4">
                  <InputLabel htmlFor="user_due_date" value="User Deadline" />
                  <TextInput
                    id="user_due_date"
                    type="date"
                    name="due_date"
                    value={data.due_date}
                    className="block w-full mt-1"
                    onChange={(e) => setData("due_date", e.target.value)}
                  />
                  <InputError message={errors.due_date} className="mt-2" />
                </div>
                <div className="mt-4">
                  <InputLabel htmlFor="user_status" value="User Status" />
                  <SelectInput
                    id="user_status"
                    name="status"
                    className="block w-full mt-1"
                    onChange={(e) => setData("status", e.target.value)}
                  >
                    <option value="">Select Status</option>
                    <option value="pending">Pending</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </SelectInput>
                  <InputError message={errors.user_status} className="mt-2" />
                </div>
                <div className="mt-4 text-right">
                  <Link
                    href={route("user.index")}
                    className="h-8 px-3 py-1 mr-2 text-sm text-gray-800 transition-all bg-gray-100 rounded shadow hover:bg-gray-200 "
                  >
                    Cancel
                  </Link>
                  <button className="h-8 px-3 py-1 text-sm text-white transition-all rounded shadow bg-emerald-500 hover:bg-emerald-600">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
