module.exports = {
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/git',
        '@semantic-release/npm',
    ],
    branches: ['master'],
    repositoryUrl: 'https://github.com/alfa-laboratory/arui-presets-lint',
};
