import { useNavigate } from "react-router-dom";
import BackButton from "../components/back_button";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "../styles/Imprint.css";

const Imprint = () => {
  const navigate = useNavigate();
  

  return (
    <>
      <div className="contain_imprint" >
        <Navbar />
        <div className="Imprint" >
          <div className="first_sctn" >
            <div className="lft" >
              <h2>REPRESENTED BY</h2>
              <ul>
                <li>
                  <p>Martina Sakova,</p>
                </li>
                <li>
                  <p>Martin Kleinmichel,</p>
                </li>
                <li>
                  <p>Film23 GmbH</p>
                </li>
              </ul>
              <BackButton className="top_tbn" onClick={() => navigate(-1)} />
              <h3>Liability for links</h3>
              <p>
                Our website contains links to external websites of third parties
                over whose contents we have no influence. Therefore, we cannot
                assume any liability for these external contents. The respective
                provider or operator of the pages is always responsible for the
                contents of the linked pages. The linked pages were checked for
                possible legal infringements at the time of linking. Illegal
                contents were not recognizable at the time of linking. However,
                permanent monitoring of the content of the linked pages is
                unreasonable without concrete evidence of a violation of the
                law. If we become aware of any infringements, we will remove
                such links immediately..
              </p>
              <h3>Copyright</h3>
              <p>
                Content and works created by the site operators on these pages
                are subject to German copyright law. Duplication, editing,
                distribution and any kind of use outside the limits of copyright
                law requires the written consent of the respective author or
                creator. Downloads and copies of this site are only permitted
                for private, non-commercial use. As far as the content on this
                site were not created by the operator, the copyrights of third
                parties are respected. In particular, the content of third
                parties are marked as such. Should you nevertheless become aware
                of a copyright infringement, please inform us accordingly. As
                soon as we become aware of any such infringements, we will
                remove such content immediately.
              </p>

              <p>
                <span className="highLit">Source</span>: eRecht24
              </p>

              <h3>1. Definitions</h3>
              <p>
                The data protection declaration of the Projector23 GmbH & Co. KG
                is based on the terms used by the European legislator for the
                adoption of the General Data Protection Regulation (GDPR). Our
                data protection declaration should be legible and understandable
                for the general public, as well as our customers and business
                partners. To ensure this, we would like to first explain the
                terminology used.
              </p>

              <h3>
                In this data protection declaration, we use, inter alia, the
                following terms:
              </h3>
              <h3>a) Personal data</h3>
              <p>
                Personal data means any information relating to an identified or
                identifiable natural person (“data subject”). An identifiable
                natural person is one who can be identified, directly or
                indirectly, in particular by reference to an identifier such as
                a name, an identification number, location data, an online
                identifier or to one or more factors specific to the physical,
                physiological, genetic, mental, economic, cultural or social
                identity of that natural person.
              </p>
            </div>
            <div className="rgt">
              <h3>Commercial Register Number</h3>
              <p className="ad_ce" >
                Amtsgericht Charlottenburg Berlin HRA 41066B
              </p>
              <h3>EU VAT ID</h3>
              <p className="ad_ce" >DE252281327</p>
              <h3>Responsible for the content according to § 55 Abs. 2 RStV</h3>
              <p className="ad_ce" >Martina Sakova</p>
              <h3>References for the used pictures and graphics</h3>
              <p className="ad_ce" >– will be delivered on request –</p>
              <p className="ad_ce" >
                <span className="highLit" >Source</span>: Imprint created by the
                imprint generator of e-recht24.de
              </p>
              <h1>Disclaimer:</h1>
              <h3>Liability for contents</h3>
              <p>
                The contents of our pages have been prepared with the greatest
                care. However, we cannot assume any liability for the
                correctness, completeness and topicality of the contents. As a
                service provider, we are responsible for our own content on
                these pages in accordance with § 7 Section 1 of the German
                Telemedia Act (TMG). According to §§ 8 to 10 TMG, however, we
                are not obliged as service providers to monitor transmitted or
                stored third-party information or to investigate circumstances
                that indicate illegal activity. Obligations to remove or block
                the use of information in accordance with general laws remain
                unaffected by this. However, liability in this respect is only
                possible from the time of knowledge of a concrete violation of
                the law. As soon as we become aware of such violations of the
                law, we will remove these contents immediately.
              </p>
              <h3>Privacy Policy</h3>
              <p>
                We are very delighted that you have shown interest in our
                enterprise. Data protection is of a particularly high priority
                for the management of the Projector23 GmbH & Co. KG. The use of
                the Internet pages of the Projector23 GmbH & Co. KG is possible
                without any indication of personal data; however, if a data
                subject wants to use special enterprise services via our
                website, processing of personal data could become necessary. If
                the processing of personal data is necessary and there is no
                statutory basis for such processing, we generally obtain consent
                from the data subject.
              </p>
              <p>
                The processing of personal data, such as the name, address,
                e-mail address, or telephone number of a data subject shall
                always be in line with the General Data Protection Regulation
                (GDPR), and in accordance with the country-specific data
                protection regulations applicable to the Projector23 GmbH & Co.
                KG. By means of this data protection declaration, our enterprise
                would like to inform the general public of the nature, scope,
                and purpose of the personal data we collect, use and process.
                Furthermore, data subjects are informed, by means of this data
                protection declaration, of the rights to which they are
                entitled.
              </p>
              <h3>b) Data subject</h3>
              <p>
                Data subject is any identified or identifiable natural person,
                whose personal data is processed by the controller responsible
                for the processing.
              </p>
              <h3>c) Processing</h3>
              <p>
                Processing is any operation or set of operations which is
                performed on personal data or on sets of personal data, whether
                or not by automated means, such as collection, recording,
                organisation, structuring, storage, adaptation or alteration,
                retrieval, consultation, use, disclosure by transmission,
                dissemination or otherwise making available, alignment or
                combination, restriction, erasure or destruction.
              </p>
            </div>
          </div>
          <h3>d) Restriction of processing</h3>
          <p>
            Restriction of processing is the marking of stored personal data
            with the aim of limiting their processing in the future.
          </p>
          <h3>e) Profiling</h3>
          <p>
            Profiling means any form of automated processing of personal data
            consisting of the use of personal data to evaluate certain personal
            aspects relating to a natural person, in particular to analyse or
            predict aspects concerning that natural person’s performance at
            work, economic situation, health, personal preferences, interests,
            reliability, behaviour, location or movements.
          </p>
          <h3>f) Pseudonymisation</h3>
          <p>
            Pseudonymisation is the processing of personal data in such a manner
            that the personal data can no longer be attributed to a specific
            data subject without the use of additional information, provided
            that such additional information is kept separately and is subject
            to technical and organisational measures to ensure that the personal
            data are not attributed to an identified or identifiable natural
            person.
          </p>
          <h3>g) Controller or controller responsible for the processing</h3>
          <p>
            Controller or controller responsible for the processing is the
            natural or legal person, public authority, agency or other body
            which, alone or jointly with others, determines the purposes and
            means of the processing of personal data; where the purposes and
            means of such processing are determined by Union or Member State
            law, the controller or the specific criteria for its nomination may
            be provided for by Union or Member State law.
          </p>
          <h3>h) Processor</h3>
          <p>
            Processor is a natural or legal person, public authority, agency or
            other body which processes personal data on behalf of the
            controller.
          </p>
          <h3>i) Recipient</h3>
          <p>
            Recipient is a natural or legal person, public authority, agency or
            another body, to which the personal data are disclosed, whether a
            third party or not. However, public authorities which may receive
            personal data in the framework of a particular inquiry in accordance
            with Union or Member State law shall not be regarded as recipients;
            the processing of those data by those public authorities shall be in
            compliance with the applicable data protection rules according to
            the purposes of the processing.
          </p>
          <h3>j) Third party</h3>
          <p>
            Third party is a natural or legal person, public authority, agency
            or body other than the data subject, controller, processor and
            persons who, under the direct authority of the controller or
            processor, are authorised to process personal data.
          </p>
          <h3>k) Consent</h3>
          <p>
            Consent of the data subject is any freely given, specific, informed
            and unambiguous indication of the data subject’s wishes by which he
            or she, by a statement or by a clear affirmative action, signifies
            agreement to the processing of personal data relating to him or her.
          </p>
          <h3>2. Name and Address of the controller</h3>
          <p>
            Controller for the purposes of the General Data Protection
            Regulation (GDPR), other data protection laws applicable in Member
            states of the European Union and other provisions related to data
            protection is:
          </p>
          <ul>
            <li>
              <p>projector23 GmbH & Co. KG</p>
            </li>
            <li>
              <p>Kiefholzstr.2</p>
            </li>
            <li>
              <p>12435 Berlin Germany</p>
            </li>
            <li>
              <p>Deutschland</p>
            </li>
            <li>
              <p>Phone: +403064839650</p>
            </li>
            <li>
              <p>Email: pivot@projector23.de</p>
            </li>
            <li>
              <p>Website: www.projector23.</p>
            </li>
          </ul>
          <h3>3. Name and Address of the Data Protection Officer</h3>
          <p className="ad_ce" >The Data Protection Officer of the controller is</p>
          <ul>
            <li>
              <p>Martin Kleinmichel</p>
            </li>
            <li>
              <p>PROJECTOR23 GmbH & Co. KG</p>
            </li>
            <li>
              <p>Kiefholzstr. 2</p>
            </li>
            <li>
              <p>12435 Berlin Germany</p>
            </li>
            <li>
              <p>Deutschland</p>
            </li>
            <li>
              <p>Phone: +403064839650</p>
            </li>
            <li>
              <p>Email: martin@projector23.de</p>
            </li>
            <li>
              <p>Website: www.projector23.de</p>
            </li>
            <li>
              <p>
                Any data subject may, at any time, contact our Data Protection
                Officer directly with all questions and suggestions concerning
                data protection.
              </p>
            </li>
          </ul>
          <h3>4. Collection of general data and information</h3>
          <p>
            The website of the Projector23 GmbH & Co. KG collects a series of
            general data and information when a data subject or automated system
            calls up the website. This general data and information are stored
            in the server log files. Collected may be (1) the browser types and
            versions used, (2) the operating system used by the accessing
            system, (3) the website from which an accessing system reaches our
            website (so-called referrers), (4) the sub-websites, (5) the date
            and time of access to the Internet site, (6) an Internet protocol
            address (IP address), (7) the Internet service provider of the
            accessing system, and (8) any other similar data and information
            that may be used in the event of attacks on our information
            technology systems.
          </p>
          <p>
            When using these general data and information, the Projector23 GmbH
            & Co. KG does not draw any conclusions about the data subject.
            Rather, this information is needed to (1) deliver the content of our
            website correctly, (2) optimize the content of our website as well
            as its advertisement, (3) ensure the long-term viability of our
            information technology systems and website technology, and (4)
            provide law enforcement authorities with the information necessary
            for criminal prosecution in case of a cyber-attack. Therefore, the
            Projector23 GmbH & Co. KG analyzes anonymously collected data and
            information statistically, with the aim of increasing the data
            protection and data security of our enterprise, and to ensure an
            optimal level of protection for the personal data we process. The
            anonymous data of the server log files are stored separately from
            all personal data provided by a data subject.
          </p>
          <h3>5. Routine erasure and blocking of personal data</h3>
          <p>
            The data controller shall process and store the personal data of the
            data subject only for the period necessary to achieve the purpose of
            storage, or as far as this is granted by the European legislator or
            other legislators in laws or regulations to which the controller is
            subject to. If the storage purpose is not applicable, or if a
            storage period prescribed by the European legislator or another
            competent legislator expires, the personal data are routinely
            blocked or erased in accordance with legal requirements.
          </p>
          <h3>6. Rights of the data subject</h3>
          <h3>a) Right of confirmation</h3>
          <p>
            Each data subject shall have the right granted by the European
            legislator to obtain from the controller the confirmation as to
            whether or not personal data concerning him or her are being
            processed. If a data subject wishes to avail himself of this right
            of confirmation, he or she may, at any time, contact any employee of
            the controller.
          </p>
          <h3>b) Right of access</h3>
          <p>
            Each data subject shall have the right granted by the European
            legislator to obtain from the controller free information about his
            or her personal data stored at any time and a copy of this
            information. Furthermore, the European directives and regulations
            grant the data subject access to the following information:the
            purposes of the processing;the categories of personal data
            concerned;the recipients or categories of recipients to whom the
            personal data have been or will be disclosed, in particular
            recipients in third countries or international organisations;where
            possible, the envisaged period for which the personal data will be
            stored, or, if not possible, the criteria used to determine that
            period;the existence of the right to request from the controller
            rectification or erasure of personal data, or restriction of
            processing of personal data concerning the data subject, or to
            object to such processing;the existence of the right to lodge a
            complaint with a supervisory authority;where the personal data are
            not collected from the data subject, any available information as to
            their source;the existence of automated decision-making, including
            profiling, referred to in Article 22(1) and (4) of the GDPR and, at
            least in those cases, meaningful information about the logic
            involved, as well as the significance and envisaged consequences of
            such processing for the data subject. Furthermore, the data subject
            shall have a right to obtain information as to whether personal data
            are transferred to a third country or to an international
            organisation. Where this is the case, the data subject shall have
            the right to be informed of the appropriate safeguards relating to
            the transfer. If a data subject wishes to avail himself of this
            right of access, he or she may, at any time, contact any employee of
            the controller.
          </p>
          <h3>c) Right to rectification</h3>
          <p>
            Each data subject shall have the right granted by the European
            legislator to obtain from the controller without undue delay the
            rectification of inaccurate personal data concerning him or her.
            Taking into account the purposes of the processing, the data subject
            shall have the right to have incomplete personal data completed,
            including by means of providing a supplementary statement.
          </p>
          <p>
            If a data subject wishes to exercise this right to rectification, he
            or she may, at any time, contact any employee of the controller.
          </p>
          <h3>d) Right to erasure (Right to be forgotten)</h3>
          <p>
            Each data subject shall have the right granted by the European
            legislator to obtain from the controller the erasure of personal
            data concerning him or her without undue delay, and the controller
            shall have the obligation to erase personal data without undue delay
            where one of the following grounds applies, as long as the
            processing is not necessary:The personal data are no longer
            necessary in relation to the purposes for which they were collected
            or otherwise processed.The data subject withdraws consent to which
            the processing is based according to point (a) of Article 6(1) of
            the GDPR, or point (a) of Article 9(2) of the GDPR, and where there
            is no other legal ground for the processing.The data subject
            objects to the processing pursuant to Article 21(1) of the GDPR and
            there are no overriding legitimate grounds for the processing, or
            the data subject objects to the processing pursuant to Article 21(2)
            of the GDPR.The personal data have been unlawfully processed.The
            personal data must be erased for compliance with a legal obligation
            in Union or Member State law to which the controller is subject.The
            personal data have been collected in relation to the offer of
            information society services referred to in Article 8(1) of the
            GDPR.
          </p>
          <p>
            If one of the aforementioned reasons applies, and a data subject
            wishes to request the erasure of personal data stored by the
            Projector23 GmbH & Co. KG, he or she may, at any time, contact any
            employee of the controller. An employee of Projector23 GmbH & Co. KG
            shall promptly ensure that the erasure request is complied with
            immediately.
          </p>
          <p>
            Where the controller has made personal data public and is obliged
            pursuant to Article 17(1) to erase the personal data, the
            controller, taking account of available technology and the cost of
            implementation, shall take reasonable steps, including technical
            measures, to inform other controllers processing the personal data
            that the data subject has requested erasure by such controllers of
            any links to, or copy or replication of, those personal data, as far
            as processing is not required. An employees of the Projector23 GmbH
            & Co. KG will arrange the necessary measures in individual cases.
          </p>
          <h3>e) Right of restriction of processing</h3>
          <p>
            Each data subject shall have the right granted by the European
            legislator to obtain from the controller restriction of processing
            where one of the following applies:The accuracy of the personal
            data is contested by the data subject, for a period enabling the
            controller to verify the accuracy of the personal data.The
            processing is unlawful and the data subject opposes the erasure of
            the personal data and requests instead the restriction of their use
            instead.The controller no longer needs the personal data for the
            purposes of the processing, but they are required by the data
            subject for the establishment, exercise or defence of legal
            claims.The data subject has objected to processing pursuant to
            Article 21(1) of the GDPR pending the verification whether the
            legitimate grounds of the controller override those of the data
            subject.
          </p>
          <p>
            If one of the aforementioned conditions is met, and a data subject
            wishes to request the restriction of the processing of personal data
            stored by the Projector23 GmbH & Co. KG, he or she may at any time
            contact any employee of the controller. The employee of the
            Projector23 GmbH & Co. KG will arrange the restriction of the
            processing.
          </p>
          <h3>f) Right to data portability</h3>
          <p>
            Each data subject shall have the right granted by the European
            legislator, to receive the personal data concerning him or her,
            which was provided to a controller, in a structured, commonly used
            and machine-readable format. He or she shall have the right to
            transmit those data to another controller without hindrance from the
            controller to which the personal data have been provided, as long as
            the processing is based on consent pursuant to point (a) of Article
            6(1) of the GDPR or point (a) of Article 9(2) of the GDPR, or on a
            contract pursuant to point (b) of Article 6(1) of the GDPR, and the
            processing is carried out by automated means, as long as the
            processing is not necessary for the performance of a task carried
            out in the public interest or in the exercise of official authority
            vested in the controller.
          </p>
          <p>
            to Article 20(1) of the GDPR, the data subject shall have the right
            to have personal data transmitted directly from one controller to
            another, where technically feasible and when doing so does not
            adversely affect the rights and freedoms of others. Furthermore, in
            exercising his or her right to data portability pursuant
          </p>
          <p>
            In order to assert the right to data portability, the data subject
            may at any time contact any employee of the Projector23 GmbH & Co.
            KG.
          </p>
          <h3>g) Right to object</h3>
          <p>
            Each data subject shall have the right granted by the European
            legislator to object, on grounds relating to his or her particular
            situation, at any time, to processing of personal data concerning
            him or her, which is based on point (e) or (f) of Article 6(1) of
            the GDPR. This also applies to profiling based on these provisions.
          </p>
          <p>
            The Projector23 GmbH & Co. KG shall no longer process the personal
            data in the event of the objection, unless we can demonstrate
            compelling legitimate grounds for the processing which override the
            interests, rights and freedoms of the data subject, or for the
            establishment, exercise or defence of legal claims.
          </p>
          <p>
            If the Projector23 GmbH & Co. KG processes personal data for direct
            marketing purposes, the data subject shall have the right to object
            at any time to processing of personal data concerning him or her for
            such marketing. This applies to profiling to the extent that it is
            related to such direct marketing. If the data subject objects to the
            Projector23 GmbH & Co. KG to the processing for direct marketing
            purposes, the Projector23 GmbH & Co. KG will no longer process the
            personal data for these purposes.
          </p>
          <p>
            In addition, the data subject has the right, on grounds relating to
            his or her particular situation, to object to processing of personal
            data concerning him or her by the Projector23 GmbH & Co. KG for
            scientific or historical research purposes, or for statistical
            purposes pursuant to Article 89(1) of the GDPR, unless the
            processing is necessary for the performance of a task carried out
            for reasons of public interest.
          </p>
          <p>
            In order to exercise the right to object, the data subject may
            contact any employee of the Projector23 GmbH & Co. KG. In addition,
            the data subject is free in the context of the use of information
            society services, and notwithstanding Directive 2002/58/EC, to use
            his or her right to object by automated means using technical
            specifications.
          </p>
          <h3>h) Automated individual decision-making, including profiling</h3>
          <p>
            Each data subject shall have the right granted by the European
            legislator to object, on grounds relating to his or her particular
            situation, at any time, to processing of personal data concerning
            him or her, which is based on point (e) or (f) of Article 6(1) of
            the GDPR. This also applies to profiling based on these provisions.
          </p>
          <p>
            Each data subject shall have the right granted by the European
            legislator not to be subject to a decision based solely on automated
            processing, including profiling, which produces legal effects
            concerning him or her, or similarly significantly affects him or
            her, as long as the decision (1) is not is necessary for entering
            into, or the performance of, a contract between the data subject and
            a data controller, or (2) is not authorised by Union or Member State
            law to which the controller is subject and which also lays down
            suitable measures to safeguard the data subject’s rights and
            freedoms and legitimate interests, or (3) is not based on the data
            subject’s explicit consent.
          </p>
          <p>
            If the decision (1) is necessary for entering into, or the
            performance of, a contract between the data subject and a data
            controller, or (2) it is based on the data subject’s explicit
            consent, the Projector23 GmbH & Co. KG shall implement suitable
            measures to safeguard the data subject’s rights and freedoms and
            legitimate interests, at least the right to obtain human
            intervention on the part of the controller, to express his or her
            point of view and contest the decision.
          </p>
          <p>
            If the data subject wishes to exercise the rights concerning
            automated individual decision-making, he or she may, at any time,
            contact any employee of the Projector23 GmbH & Co. KG.
          </p>
          <h3>i) Right to withdraw data protection consent</h3>
          <p>
            Each data subject shall have the right granted by the European
            legislator to withdraw his or her consent to processing of his or
            her personal data at any time.
          </p>
          <p>
            If the data subject wishes to exercise the right to withdraw the
            consent, he or she may, at any time, contact any employee of the
            Projector23 GmbH & Co. KG.
          </p>
          <h3>7. Legal basis for the processing</h3>
          <p>
            Art. 6(1) lit. a GDPR serves as the legal basis for processing
            operations for which we obtain consent for a specific processing
            purpose. If the processing of personal data is necessary for the
            performance of a contract to which the data subject is party, as is
            the case, for example, when processing operations are necessary for
            the supply of goods or to provide any other service, the processing
            is based on Article 6(1) lit. b GDPR. The same applies to such
            processing operations which are necessary for carrying out
            pre-contractual measures, for example in the case of inquiries
            concerning our products or services. Is our company subject to a
            legal obligation by which processing of personal data is required,
            such as for the fulfillment of tax obligations, the processing is
            based on Art. 6(1) lit. c GDPR. In rare cases, the processing of
            personal data may be necessary to protect the vital interests of the
            data subject or of another natural person. This would be the case,
            for example, if a visitor were injured in our company and his name,
            age, health insurance data or other vital information would have to
            be passed on to a doctor, hospital or other third party. Then the
            processing would be based on Art. 6(1) lit. d GDPR. Finally,
            processing operations could be based on Article 6(1) lit. f GDPR.
            This legal basis is used for processing operations which are not
            covered by any of the abovementioned legal grounds, if processing is
            necessary for the purposes of the legitimate interests pursued by
            our company or by a third party, except where such interests are
            overridden by the interests or fundamental rights and freedoms of
            the data subject which require protection of personal data. Such
            processing operations are particularly permissible because they have
            been specifically mentioned by the European legislator. He
            considered that a legitimate interest could be assumed if the data
            subject is a client of the controller (Recital 47 Sentence 2 GDPR).
          </p>
          <h3>
            8. The legitimate interests pursued by the controller or by a third
            party
          </h3>
          <p>
            Where the processing of personal data is based on Article 6(1) lit.
            f GDPR our legitimate interest is to carry out our business in favor
            of the well-being of all our employees and the shareholders.
          </p>
          <h3>9. Period for which the personal data will be stored</h3>
          <p>
            The criteria used to determine the period of storage of personal
            data is the respective statutory retention period. After expiration
            of that period, the corresponding data is routinely deleted, as long
            as it is no longer necessary for the fulfillment of the contract or
            the initiation of a contract.
          </p>
          <h3>
            10. Provision of personal data as statutory or contractual
            requirement; Requirement necessary to enter into a contract;
            Obligation of the data subject to provide the personal data;
            possible consequences of failure to provide such data
          </h3>
          <p>
            The criteria used to determine the period of storage of personal
            data is the respective statutory retention period. After expiration
            of that period, the corresponding data is routinely deleted, as long
            as it is no longer necessary for the fulfillment of the contract or
            the initiation of a contract.
          </p>
          <p>
            We clarify that the provision of personal data is partly required by
            law (e.g. tax regulations) or can also result from contractual
            provisions (e.g. information on the contractual partner). Sometimes
            it may be necessary to conclude a contract that the data subject
            provides us with personal data, which must subsequently be processed
            by us. The data subject is, for example, obliged to provide us with
            personal data when our company signs a contract with him or her. The
            non-provision of the personal data would have the consequence that
            the contract with the data subject could not be concluded. Before
            personal data is provided by the data subject, the data subject must
            contact any employee. The employee clarifies to the data subject
            whether the provision of the personal data is required by law or
            contract or is necessary for the conclusion of the contract, whether
            there is an obligation to provide the personal data and the
            consequences of non-provision of the personal data.
          </p>
          <h3>11. Existence of automated decision-making</h3>
          <p>
            As a responsible company, we do not use automatic decision-making or
            profiling.
          </p>
          <p>
            This Privacy Policy has been generated by the Privacy Policy
            Generator of the German Association for Data Protection that was
            developed in cooperation with Privacy Lawyers from WILDE BEUGER
            SOLMECKE, Cologne.
          </p>
          <BackButton className="bttom" onClick={() => navigate(-1)} />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Imprint;
