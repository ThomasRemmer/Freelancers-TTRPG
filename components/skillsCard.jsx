import { useState, useEffect } from "react";
export default function SkillsCard(character) {
  const [Recall, setRecall] = useState([]);
  const [RecallTags, setRecallTags] = useState([]);
  const [Control, setControl] = useState([]);
  const [ControlTags, setControlTags] = useState([]);
  const [Hide, setHide] = useState([]);
  const [HideTags, setHideTags] = useState([]);
  const [Infer, setInfer] = useState([]);
  const [InferTags, setInferTags] = useState([]);
  const [Mend, setMend] = useState([]);
  const [MendTags, setMendTags] = useState([]);
  const [Flex, setFlex] = useState([]);
  const [FlexTags, setFlexTags] = useState([]);
  const [Discern, setDiscern] = useState([]);
  const [DiscernTags, setDiscernTags] = useState([]);
  const [Create, setCreate] = useState([]);
  const [CreateTags, setCreateTags] = useState([]);
  const [Fight, setFight] = useState([]);
  const [FightTags, setFightTags] = useState([]);
  const [Persuade, setPersuade] = useState([]);
  const [PersuadeTags, setPersuadeTags] = useState([]);
  const [Aim, setAim] = useState([]);
  const [AimTags, setAimTags] = useState([]);
  const [Thaum, setThaum] = useState([]);
  const [ThaumTags, setThaumTags] = useState([]);

  useEffect(() => {
    if (character) {
      setRecall(character.Recall);
      setRecallTags(character.RecallTags);
      setControl(character.Control);
      setControlTags(character.ControlTags);
      setHide(character.Hide);
      setHideTags(character.HideTags);
      setInfer(character.Infer);
      setInferTags(character.InferTags);
      setMend(character.Mend);
      setMendTags(character.MendTags);
      setFlex(character.Flex);
      setFlexTags(character.FlexTags);
      setDiscern(character.Discern);
      setDiscernTags(character.DiscernTags);
      setCreate(character.Create);
      setCreateTags(character.CreateTags);
      setFight(character.Fight);
      setFightTags(character.FightTags);
      setPersuade(character.Persuade);
      setPersuadeTags(character.PersuadeTags);
      setAim(character.Aim);
      setAimTags(character.AimTags);
      setThaum(character.Thaum);
      setThaumTags(character.ThaumTags);
    }
  }, [character]);

  return (
    <div className="col-span-3 row-span-1 bg-gray-700 grid grid-cols-[3fr,2fr,5fr,3fr,2fr,5fr,3fr,2fr,5fr]  gap-0 p-1">
      <div className="border border-black">Recall</div>
      <input
        type="number"
        className="border border-black w-full h-full text-center"
        value={Recall}
      ></input>
      <input
        type="text"
        className="border border-black w-full h-full"
        placeholder="tags"
        value={RecallTags}
      ></input>
      <div className="border border-black">Control</div>
      <input
        type="number"
        className="border border-black w-full h-full text-center"
        value={Control}
      ></input>
      <input
        type="text"
        className="border border-black w-full h-full"
        placeholder="tags"
        value={ControlTags}
      ></input>
      <div className="border border-black">Hide</div>
      <input
        type="number"
        className="border border-black w-full h-full text-center"
        value={Hide}
      ></input>
      <input
        type="text"
        className="border border-black w-full h-full"
        placeholder="tags"
        value={HideTags}
      ></input>
      <div className="border border-black">Infer</div>
      <input
        type="number"
        className="border border-black w-full h-full text-center"
        value={Infer}
      ></input>
      <input
        type="text"
        className="border border-black w-full h-full"
        placeholder="tags"
        value={InferTags}
      ></input>
      <div className="border border-black">Mend</div>
      <input
        type="number"
        className="border border-black w-full h-full text-center"
        value={Mend}
      ></input>
      <input
        type="text"
        className="border border-black w-full h-full"
        placeholder="tags"
        value={MendTags}
      ></input>
      <div className="border border-black">Flex</div>
      <input
        type="number"
        className="border border-black w-full h-full text-center"
        value={Flex}
      ></input>
      <input
        type="text"
        className="border border-black w-full h-full"
        placeholder="tags"
        value={FlexTags}
      ></input>
      <div className="border border-black">Discern</div>
      <input
        type="number"
        className="border border-black w-full h-full text-center"
        value={Discern}
      ></input>
      <input
        type="text"
        className="border border-black w-full h-full"
        placeholder="tags"
        value={DiscernTags}
      ></input>
      <div className="border border-black">Create</div>
      <input
        type="number"
        className="border border-black w-full h-full text-center"
        value={Create}
      ></input>
      <input
        type="text"
        className="border border-black w-full h-full"
        placeholder="tags"
        value={CreateTags}
      ></input>
      <div className="border border-black">Fight</div>
      <input
        type="number"
        className="border border-black w-full h-full text-center"
        value={Fight}
      ></input>
      <input
        type="text"
        className="border border-black w-full h-full"
        placeholder="tags"
        value={FightTags}
      ></input>
      <div className="border border-black">Persuade</div>
      <input
        type="number"
        className="border border-black w-full h-full text-center"
        value={Persuade}
      ></input>
      <input
        type="text"
        className="border border-black w-full h-full"
        placeholder="tags"
        value={PersuadeTags}
      ></input>
      <div className="border border-black">Aim</div>
      <input
        type="number"
        className="border border-black w-full h-full text-center"
        value={Aim}
      ></input>
      <input
        type="text"
        className="border border-black w-full h-full"
        placeholder="tags"
        value={AimTags}
      ></input>
      <div className="border border-black">Thaum</div>
      <input
        type="number"
        className="border border-black w-full h-full text-center"
        value={Thaum}
      ></input>
      <input
        type="text"
        className="border border-black w-full h-full"
        placeholder="tags"
        value={ThaumTags}
      ></input>
    </div>
  );
}
