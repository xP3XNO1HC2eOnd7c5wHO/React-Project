// Competition configuration
export const competitionConfig = {
  // These values will be provided by the competition environment
  teamName: import.meta.env.VITE_TEAM_NAME,
  runnerType: import.meta.env.VITE_RUNNER_TYPE,
  testRepo: import.meta.env.VITE_TEST_REPO,
  authToken: import.meta.env.VITE_AUTH_TOKEN,
  backendUrl: import.meta.env.VITE_BACKEND_URL,
  authKey: import.meta.env.VITE_AUTH_KEY,
};

// Helper function to check if we're in competition mode
export const isCompetitionMode = () => {
  return import.meta.env.VITE_COMPETITION_MODE === 'true';
};

// Helper function to get competition-specific configuration
export const getCompetitionConfig = () => {
  if (!isCompetitionMode()) {
    console.warn('Not in competition mode - using default configuration');
    return {
      teamName: 'default-team',
      runnerType: 'ubuntu-latest',
    };
  }
  return competitionConfig;
}; 