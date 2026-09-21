export interface Profile {
  name: string
  jobTitle: string
  bio: string
  location: string
  email: string
  avatar: string
  socialLinks: {
    label: string
    url: string
  }[]
}
