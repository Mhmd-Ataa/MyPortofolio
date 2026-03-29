import "./Contacts.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import done from "../../../Asset/done.json";
import contacts from "../../../Asset/contacts.json";

const Contacts = () => {
  const [state, handleSubmit] = useForm("moqgnaeg");

  return (
    <>
      <section className="contacts p-5 ">
        <div className="title">
          <div className="subtitle d-flex align-items-center gap-3 mb-3">
            <i className="fa-solid fa-envelope"></i>
            <h2 className="m-0">Contact Us</h2>
          </div>
          <p>
            Contact Us For More Information And Get Notified When I Publish
            Somethings New
          </p>
        </div>

        <div className="row pt-5 mt-5">
          <div className="col-md-12  col-lg-6">
            <form onSubmit={handleSubmit} className="my-4 ">
              <div className="box d-flex  gap-3 mb-3">
                <label htmlFor="email">Email Address :</label>
                <input type="email" className=" p-3" name="email" required />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="box d-flex  gap-3">
                <label htmlFor="message">Your Message :</label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  className=" p-3"
                  required
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                className="btn btn-dark mt-4"
                type="submit"
                disabled={state.submitting}
              >
                {state.submitting ? "Submitting" : "submit"}
              </button>
              {state.succeeded && (
                <p
                  style={{ fontSize: "14px", color: "green" }}
                  className="mt-2 d-flex align-items-center"
                >
                  <Lottie
                    loop={false}
                    animationData={done}
                    style={{ height: 40 }}
                    className="mt-1"
                  />
                  Your Message has been sent successfully 😉
                </p>
              )}
            </form>
          </div>

          <div className="col-md-12  col-lg-6 animation ">
            <Lottie
              loop={true}
              animationData={contacts}
              style={{ height: 360 }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
