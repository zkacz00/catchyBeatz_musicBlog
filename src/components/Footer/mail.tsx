import React from "react";
import { useStaticQuery, graphql } from "gatsby"

const Mail = ({title, placeholder, submitValue}: Record<string, any>) => (
   <>
      <p className="footer__title">{title}</p>
      <form>
         <input type="email" placeholder={placeholder} required/>
         <input type="submit" value={submitValue} />
      </form>
   </>
)

export default Mail;