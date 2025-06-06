const LOCAL_URL = "http://localhost:5000/api";
// const STAGE_URL = "https://stgfastapi.selfsync.ai";
// const PROD_URL = "https://fastapi.selfsync.ai";

const environments = {
  local: LOCAL_URL,
  // staging: STAGE_URL,
  // prod: PROD_URL,
};

// const activeEnvironment = environments.staging;

const activeEnvironment = environments.local;

const apiEndpoints = {

    login:`${activeEnvironment}/admin/login`,
    register:`${activeEnvironment}/admin/register`
}

export { activeEnvironment, apiEndpoints };