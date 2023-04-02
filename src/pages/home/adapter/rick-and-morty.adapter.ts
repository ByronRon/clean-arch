import { ApiUser, User } from "@/models"

export const RickAndMortyAdapter = (user: ApiUser): User => {
    return {
        "id": user.id,
        "name": user.name,
        "status": user.name,
        "species": user.species
    }
}
