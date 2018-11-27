class GitHub {
  constructor() {
    this.client_id = 'e3311d5a01f02b5d2fb6';
    this.client_secret= '7d4ced4e6ddf8a9aa66cbd7959ff9ab4ea0c6626';
    this.repos_count = 5
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();
    const reposData = await repoResponse.json();

    return {
      profileData,
      reposData
    }
  }

}