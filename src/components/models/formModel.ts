import React from "react";

export interface formModel extends React.PropsWithChildren {
    firstName: string,
    lastName: string,
    phone: string,
    email: string
}
export type Props = { data: formModel };