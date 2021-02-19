--
-- PostgreSQL database dump
--

-- Dumped from database version 12.6 (Ubuntu 12.6-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.6 (Ubuntu 12.6-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: company; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.company (
    id integer NOT NULL,
    name text NOT NULL,
    age integer NOT NULL,
    address character(50),
    salary numeric
);


ALTER TABLE public.company OWNER TO postgres;

--
-- Name: departemen; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.departemen (
    id integer NOT NULL,
    dept character(50) NOT NULL,
    emp_id integer
);


ALTER TABLE public.departemen OWNER TO postgres;

--
-- Data for Name: company; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.company (id, name, age, address, salary) FROM stdin;
1	paul	32	bantul                                            	200
2	allen	25	solo                                              	300
4	mark	26	gunkid                                            	600
3	teddy	23	kulonprogo                                        	150
\.


--
-- Data for Name: departemen; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.departemen (id, dept, emp_id) FROM stdin;
1	keuangan                                          	1
2	petarunx                                          	2
9	petani                                            	3
7	ninja                                             	4
\.


--
-- Name: company company_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.company
    ADD CONSTRAINT company_pkey PRIMARY KEY (id);


--
-- Name: departemen departemen_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departemen
    ADD CONSTRAINT departemen_pkey PRIMARY KEY (id);


--
-- Name: departemen departemen_emp_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departemen
    ADD CONSTRAINT departemen_emp_id_fkey FOREIGN KEY (emp_id) REFERENCES public.company(id);


--
-- PostgreSQL database dump complete
--

