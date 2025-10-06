import { z } from 'zod';

export const CreateEvent = z.object({
  title: z.string().min(1),
  startsAt: z.coerce.date(),
  endsAt: z.coerce.date(),
  venueName: z.string().optional(),
  venueAddress: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  coverFileId: z.string().optional(),
  tags: z.array(z.string()).default([]),
  status: z.enum(['draft','published','cancelled']).default('draft')
});

export const CreateTicketType = z.object({
  eventId: z.string(),
  name: z.string().min(1),
  priceCents: z.number().int().nonnegative(),
  currency: z.string().length(3),
  quantityTotal: z.number().int().nonnegative(),
  salesStart: z.coerce.date().optional(),
  salesEnd: z.coerce.date().optional()
});

export const PurchaseTicket = z.object({
  eventId: z.string(),
  ticketTypeId: z.string()
});


