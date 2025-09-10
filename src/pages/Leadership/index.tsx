import { useState } from "react";
import board from "@data/board";
import { Container, ModalOverlay, ModalContent } from "./styles";
import LeadershipCard from "@components/LeadershipCard";
import { AnimatePresence, motion } from "framer-motion";
import { QuoteIcon } from "lucide-react";
import { useTheme } from "styled-components";
import { customEaseOut } from "@styles/global";

const Leadership = () => {
  const theme = useTheme();
  const [selectedLeader, setSelectedLeader] = useState<
    (typeof board)[number] | null
  >(null);

  // add a minimal type for experimental API to avoid TS errors
  const docAny: Document & { startViewTransition?: (cb: () => void) => void } =
    document as any;

  const handleCardClick = (leader: any) => {
    if (docAny.startViewTransition) {
      docAny.startViewTransition(() => {
        setSelectedLeader(leader);
      });
    } else {
      setSelectedLeader(leader);
    }
  };

  const closeModal = () => setSelectedLeader(null);

  return (
    <AnimatePresence>
      <Container>
        <h1>Leadership</h1>
        <div
          className="grid"
          style={{ pointerEvents: selectedLeader ? "none" : "auto" }}
        >
          {board.map((member, index) => (
            <motion.div
              key={member.name}
              onClick={() => handleCardClick(member)}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: (index + 1) * 0.1,
                ease: customEaseOut,
                duration: 0.5,
              }}
            >
              <LeadershipCard
                layoutId={`leader-${member.name}`}
                {...member}
                style={{ cursor: "pointer" }}
              />
            </motion.div>
          ))}
        </div>

        {selectedLeader && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={selectedLeader ? "open" : ""}
            onClick={closeModal}
          >
            <ModalContent
              className={selectedLeader ? "open" : ""}
              onClick={(e) => e.stopPropagation()}
            >
              <>
                <div>
                  <LeadershipCard
                    layoutId={`leader-${selectedLeader.name}`}
                    {...selectedLeader}
                    style={{ pointerEvents: "none" }}
                  />
                </div>
                <div className="bio">
                  <QuoteIcon
                    style={{
                      transform: "scale(-1)",
                      opacity: 0.3,
                      marginBottom: "1rem",
                    }}
                    size={50}
                    color={theme.colors.contrast}
                  />
                  {selectedLeader.bio?.length ? (
                    selectedLeader.bio.map((paragraph) => (
                      <>
                        <p>{paragraph}</p>
                        {/* <br /> */}
                      </>
                    ))
                  ) : (
                    <p>{selectedLeader.bio}</p>
                  )}
                  <QuoteIcon
                    style={{
                      alignSelf: "flex-end",
                      opacity: 0.3,
                      marginTop: "-1rem",
                    }}
                    size={50}
                    color={theme.colors.contrast}
                  />
                  <small style={{ fontStyle: "italic" }}>
                    - {selectedLeader.name}
                  </small>
                </div>
              </>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </AnimatePresence>
  );
};

export default Leadership;
