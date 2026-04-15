import {z} from 'zod'

export const acceptMessaageSchema = z.object({
    acceptMessage: z.boolean()
})