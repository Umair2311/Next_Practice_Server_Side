import React, { useMemo, useState } from "react"
import styles from "../styles/Home.module.css"
import Head from "next/head"
import Link from "next/link"
import { User } from "../src/types/index"

interface UserProps {
  allUsers: User[]
}

const Users = (props: UserProps) => {
  const [search, setSearch] = useState("")
  const { allUsers } = props

  const changeHandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const filteredUsers = useMemo(() => {
    if (!search) {
      return allUsers
    }
    return allUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.username.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  return (
    <>
      <Head>
        <title>API Call</title>
        <meta name="description" content="Generated by Umair Saeed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>
      <div>
        <div>
          <main className="font-bold text-3xl text-center underline p-2.5 mt-24">
            Fake Users from JSONPlaceholder
          </main>
          <main className="flex justify-center text-3xl my-6 mx-auto">
            <label className="mr-4">Search by Name:</label>
            <input
              onChange={changeHandleSearch}
              className="block w-52 py-0.5 px-2.5 text-sm "
            />
          </main>
        </div>
        <main className="flex flex-wrap cursor-pointer justify-center">
          {filteredUsers.map((user) => {
            return (
              <Link className={styles.details} href={`/${user.id}`}>
                <h2>{user.id}</h2>
                <h3>{user.name}</h3>
                <h4>{user.username}</h4>
              </Link>
            )
          })}
        </main>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
  const allUsers = await data.json()

  return {
    props: { allUsers },
  }
}

export default Users
