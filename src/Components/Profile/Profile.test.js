import   * as mockAPI  from './ProfileMock'

  var body={
    name: "Menna",
    bio: "Heyy",
    location: "Cairo",
    website: "www.me.com",
    img: {
        "alt": "Screenshot (1).png",
        "src": "blob:http://localhost:3000/e26010d9-cd96-436a-8888-241fa7424824"
      },
}

  test('Profile information', () => {
    expect(mockAPI.Profile(body)).toBeTruthy();
  });