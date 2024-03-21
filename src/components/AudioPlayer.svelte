<script context="module" lang="ts">
    const players: Set<HTMLAudioElement> = new Set();
  
    export function stopAll() {
      players.forEach(p => p.pause());
    }
</script>
  
<script lang="ts">
    import { onMount } from 'svelte';
  
    export let src: string;
    
    let player: HTMLAudioElement;
  
    onMount(() => {
      // Like players.push(player)
      players.add(player);
    })
  </script>
  
  <div>
      <audio
          bind:this={player}
          {src}
          autoplay
          controls>
          <track kind="captions" />
      </audio>
  </div>