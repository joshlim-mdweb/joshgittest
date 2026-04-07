import { readFileSync, writeFileSync, existsSync } from "fs";

interface StopHookInput {
  conversation_id: string;
  status: "completed" | "aborted" | "error";
  loop_count: number;
}

const input: StopHookInput = await Bun.stdin.json();
const MAX_ITERATIONS = 5;

if (input.status !== "completed" || input.loop_count >= MAX_ITERATIONS) {
  console.log(JSON.stringify({}));
  process.exit(0);
}

// Auto-update RENEWAL.md timestamp
const renewalPath = ".cursor/plans/RENEWAL.md";
if (existsSync(renewalPath)) {
  let content = readFileSync(renewalPath, "utf-8");
  const timestamp = new Date().toISOString().slice(0, 16).replace("T", " ");
  if (content.includes("_Last updated:_")) {
    content = content.replace(/_Last updated:_ .+/, `_Last updated:_ ${timestamp}`);
  } else {
    content = content.replace(
      "> 이 문서는 리뉴얼 진행 중 자동으로 업데이트된다.",
      `> 이 문서는 리뉴얼 진행 중 자동으로 업데이트된다.\n> _Last updated:_ ${timestamp}`
    );
  }
  writeFileSync(renewalPath, content);
}

// Check scratchpad for completion signal
const scratchpad = existsSync(".cursor/scratchpad.md")
  ? readFileSync(".cursor/scratchpad.md", "utf-8")
  : "";

if (scratchpad.includes("DONE")) {
  console.log(JSON.stringify({}));
} else {
  console.log(
    JSON.stringify({
      followup_message: `[Iteration ${input.loop_count + 1}/${MAX_ITERATIONS}] Continue working toward the goal. Run \`yarn lint\` and \`yarn build\` to check progress. Update .cursor/scratchpad.md with "DONE" when the goal is fully achieved.`,
    })
  );
}
