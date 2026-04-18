/**
 * Centralized path definitions for the application.
 */
export const PATHS = {
  // Routes
  ROOT: '/',
  ADMIN_DASHBOARD: '/server',
  USER_ROOT: '/pages',
  PILIH_NEGARA: '/pages/pilih-negara',

  // Internal Backend Paths (within src/server)
  BACKEND: {
    CPP_CORE: 'src/server/cpp-core',
    GO_BACKEND: 'src/server/go-backend',
    JAVA_SERVICE: 'src/server/java-service',
    PYTHON_API: 'src/server/python-api',
    RUST_SERVICE: 'src/server/rust-service',
  }
} as const;

export type AppPath = typeof PATHS[keyof typeof PATHS];
