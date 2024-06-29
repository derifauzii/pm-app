import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

import TaskTable from "./TaskTable";

export default function index({ auth, tasks, queryParams = null }) {
  queryParams = queryParams || {};
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Tasks
        </h2>
      }
    >
      <Head title="Projects" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <TaskTable tasks={tasks} queryParams={queryParams} />
              {/* <pre>{JSON.stringify(projects, undefined, 2)}</pre> */}
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
